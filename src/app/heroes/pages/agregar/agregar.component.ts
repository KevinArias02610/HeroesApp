import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public publisher = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comics', desc: 'Marvel - Comics'},
  ];

  public heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_img: ''
  }
  constructor(
    private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.heroeService.getHeroesPorId(id)))
    .subscribe(heroe => this.heroe = heroe)
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0  || !this.heroe.alt_img){
      Swal.fire(
        'Atención',
        'El nombre y la imágen del Héroe son requeridos.',
        'warning'
      );
      return;
    }

    if(this.heroe.id){
      this.heroeService.editarHeroe(this.heroe).subscribe(res =>{
      this.router.navigate(['/heroes', res.id]);
      this.mostrarSnackbar('Héroe actualizado');
      console.log(res)
      });
    }else{
      this.heroeService.agregarHeroe(this.heroe).subscribe(res =>{
        this.router.navigate(['/heroes', res.id]);
        this.mostrarSnackbar('Héroe creado');
        console.log(res)
      });
    }
  };

  borrar(){
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      width: '20%',
      data: {nombre: this.heroe.superhero},
    });
    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return
      }else{
        this.heroeService.borrarHeroe(this.heroe.id!).subscribe(res => {
          this.router.navigate(['/heroes']);
          this.mostrarSnackbar('Héroe borrado');
        });
      }
    });

  };

  mostrarSnackbar(mensaje: string){
    this.snackBar.open(mensaje, 'ok!', {
      duration: 4000
    })
  };

}
