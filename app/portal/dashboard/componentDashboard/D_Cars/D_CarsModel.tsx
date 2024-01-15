interface CarsListInterface {
  idDoc?: string;
  capacity: number;
  desc: string;
  id?: string;
  name: string;
  picture?: File ;
  price: string;
}

interface CarPostInterFace {
    capacity: number;
    desc: string;
    id?: string;
    name: string;
    picture?: unknown;
    price: string;
  }

  interface KeyValueInterface{
    key: string
    value: string
  }



interface ImageDataInterface {
  image: File;
  dataCar: CarPostInterFace;
}
