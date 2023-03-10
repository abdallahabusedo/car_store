const Cars = [
  {
    modelPath: "./car1/scene.gltf",
    positionY: 250,
    bgColor: "#f15946",
    modalPosition: [0, 1.2, 116],
    title: (
      <h1
        id="car1"
        className="text-[10rem] text-center w-full text-white mx-auto lg:text-8xl font-heading font-bold"
      >
        MERCEDES
      </h1>
    ),
  },
  {
    modelPath: "./car3/scene.gltf",
    positionY: 0,
    bgColor: "#571ec1",
    modalPosition: [0, 7, 113],
    title: (
      <h1
        id="car2"
        className="text-[10rem] text-center w-full text-white mx-auto lg:text-8xl font-heading font-bold"
      >
        Future Car
      </h1>
    ),
  },
  {
    modelPath: "./car4/scene.gltf",
    positionY: -250,
    bgColor: "#636567",
    modalPosition: [0, 13.5, 116],
    title: (
      <h1
        id="car3"
        className="text-[10rem] text-center w-full text-white mx-auto lg:text-8xl font-heading font-bold"
      >
        Purche
      </h1>
    ),
  },
  {
    modelPath: "./car5/scene.gltf",
    positionY: -500,
    bgColor: "#F7F48B",
    modalPosition: [0, -9, 115],
    title: (
      <h1
        id="car4"
        className="text-[10rem] text-center w-full text-black mx-auto lg:text-8xl font-heading font-bold"
      >
        lamborghini
      </h1>
    ),
  },
  {
    modelPath: "./car6/scene.gltf",
    positionY: -750,
    bgColor: "#FFCD60",
    modalPosition: [-0.1, -7, 116],
    title: (
      <h1
        id="car5"
        className="text-[10rem] text-center w-full text-white mx-auto lg:text-8xl font-heading font-bold"
      >
        Maserati
      </h1>
    ),
  },
];

export { Cars };
