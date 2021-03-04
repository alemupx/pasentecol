import { Component, OnInit } from '@angular/core';
import { FotosInterface } from '../../interfaces/fotosInterface';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss'],
})
export class FotosComponent implements OnInit {
  listaFotos: FotosInterface[] = [
    {
      titulo: 'Lorem Ipsum',
      descripcion: 'Dolor Sit Amet',
      url:
        'https://firebasestorage.googleapis.com/v0/b/pasentecol.appspot.com/o/fotos%2FIMG_20190124_161049_943.jpg?alt=media&token=888ed18d-cfd2-4794-ace0-9b34d33e761c',
    },
    
    {
      titulo: 'Lorem Ipsum',
      descripcion: 'Dolor Sit Amet',
      url:
        'https://firebasestorage.googleapis.com/v0/b/pasentecol.appspot.com/o/fotos%2FIMG_20210302_152440_649.jpg?alt=media&token=c99fdb46-5469-4f0e-bf45-6512655fdfb3',
    },
    {
      titulo: 'Lorem Ipsum',
      descripcion: 'Dolor Sit Amet',
      url:
        'https://firebasestorage.googleapis.com/v0/b/pasentecol.appspot.com/o/fotos%2FIMG_20210113_151341_605.jpg?alt=media&token=6fe78a90-7e63-4a82-b56e-bd71b5096583',
    },
    {
      titulo: 'Lorem Ipsum',
      descripcion: 'Dolor Sit Amet',
      url:
        'https://firebasestorage.googleapis.com/v0/b/pasentecol.appspot.com/o/fotos%2FIMG_20181224_112524_232.jpg?alt=media&token=fd9cc105-54b0-4ffa-85a1-f713919d5119',
    },

    {
      titulo: 'Lorem Ipsum',
      descripcion: 'Dolor Sit Amet',
      url:
        'https://firebasestorage.googleapis.com/v0/b/pasentecol.appspot.com/o/fotos%2FIMG_20190714_010301_169.jpg?alt=media&token=09732443-f09b-4814-ada0-b6c516dfd4d9',
    },
    {
      titulo: 'Lorem Ipsum',
      descripcion: 'Dolor Sit Amet',
      url:
        'https://firebasestorage.googleapis.com/v0/b/pasentecol.appspot.com/o/fotos%2FIMG_20190409_184149_757.jpg?alt=media&token=c0805ccf-e20e-4544-b9a1-04a27fa3a3f7',
    },
    {
      titulo: 'Lorem Ipsum',
      descripcion: 'Dolor Sit Amet',
      url:
        'https://firebasestorage.googleapis.com/v0/b/pasentecol.appspot.com/o/fotos%2FIMG_20191015_014837_689.jpg?alt=media&token=f224edd6-7ee5-4a15-8f27-38f5579fc07f',
    },
    {
      titulo: 'Lorem Ipsum',
      descripcion: 'Dolor Sit Amet',
      url:
        'https://firebasestorage.googleapis.com/v0/b/pasentecol.appspot.com/o/fotos%2FIMG_20200126_105418_568.jpg?alt=media&token=0c528fa2-298e-4bbb-81b2-5007ccc526de',
    },
    {
      titulo: 'Lorem Ipsum',
      descripcion: 'Dolor Sit Amet',
      url:
        'https://firebasestorage.googleapis.com/v0/b/pasentecol.appspot.com/o/fotos%2FIMG_20190118_032327_586.jpg?alt=media&token=de3aec55-ccc1-46f2-a28f-6f7e449cb5e2',
    },
    {
      titulo: 'Lorem Ipsum',
      descripcion: 'Dolor Sit Amet',
      url:
        'https://firebasestorage.googleapis.com/v0/b/pasentecol.appspot.com/o/fotos%2FIMG_20200613_224140_437.jpg?alt=media&token=17b7db55-7bbe-4d4b-b118-c064d06361b3',
    },
    {
      titulo: 'Lorem Ipsum',
      descripcion: 'Dolor Sit Amet',
      url:
        'https://firebasestorage.googleapis.com/v0/b/pasentecol.appspot.com/o/fotos%2FIMG_20191211_232133_714.jpg?alt=media&token=53614bad-01a3-4522-b975-a96e380d1e87',
    },
    {
      titulo: 'Lorem Ipsum',
      descripcion: 'Dolor Sit Amet',
      url:
        'https://firebasestorage.googleapis.com/v0/b/pasentecol.appspot.com/o/fotos%2FIMG_20200405_151224_065.jpg?alt=media&token=e7f26572-706e-4b68-be70-bdaec46627ab',
    },
    {
      titulo: 'Lorem Ipsum',
      descripcion: 'Dolor Sit Amet',
      url:
        'https://firebasestorage.googleapis.com/v0/b/pasentecol.appspot.com/o/fotos%2FIMG_20210113_140738_537.jpg?alt=media&token=26fcc7a1-c21d-4762-900e-b285914673da',
    },
  ];
  foto: FotosInterface;

  constructor() {}

  ngOnInit() {}
}
