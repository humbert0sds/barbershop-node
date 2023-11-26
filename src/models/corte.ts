type Cortes = '' | 'all' | 'cortes-curtos' | 'cortes-medios';

type Corte = {
    cut: Cortes,
    image: string,
    name: string,
    value: number
}

const data: Corte[] = [
    {
      "cut": "all",
      "image": "/images/fotoCorteClassico.png",
      "name": "Corte Clássico",
      "value": 30.00
    },
    {
      "cut": "cortes-curtos",
      "image": "/images/undercut.png",
      "name": "Undercut",
      "value": 35.00
    },
    {
      "cut": "cortes-curtos",
      "image": "/images/buzzCut.png",
      "name": "Buzz Cut",
      "value": 25.00
    },
    {
      "cut": "cortes-curtos",
      "image": "/images/Fade.png",
      "name": "Fade",
      "value": 30.00
    },
    {
      "cut": "cortes-curtos",
      "image": "/images/caesarCut.png",
      "name": "Caesar Cut",
      "value": 28.00
    },
    {
      "cut": "cortes-curtos",
      "image": "/images/ivyLeague.png",
      "name": "Ivy League",
      "value": 32.00
    },
    {
      "cut": "cortes-curtos",
      "image": "/images/crewCut.png",
      "name": "Crew Cut",
      "value": 27.00
    },
    {
      "cut": "cortes-curtos",
      "image": "/images/spikyHair.png",
      "name": "Spiky Hair",
      "value": 29.00
    },
    {
      "cut": "cortes-curtos",
      "image": "/images/highAndTight.png",
      "name": "High and Tight",
      "value": 31.00
    },
    {
      "cut": "cortes-curtos",
      "image": "/images/frenchCrop.png",
      "name": "French Crop",
      "value": 33.00
    },
    {
      "cut": "cortes-medios",
      "image": "/images/Quiff.png",
      "name": "Quiff",
      "value": 40.00
    },
    {
      "cut": "cortes-medios",
      "image": "/images/Pompadour.png",
      "name": "Pompadour",
      "value": 45.00
    },
    {
      "cut": "cortes-medios",
      "image": "/images/sidePart.png",
      "name": "Side Part",
      "value": 38.00
    },
    {
      "cut": "cortes-medios",
      "image": "/images/slickedBack.png",
      "name": "Slicked Back",
      "value": 42.00
    },
    {
      "cut": "cortes-medios",
      "image": "/images/texturedCrop.png",
      "name": "Textured Crop",
      "value": 39.00
    },
    {
      "cut": "cortes-medios",
      "image": "/images/combOver.png",
      "name": "Comb Over",
      "value": 41.00
    },
    {
      "cut": "cortes-medios",
      "image": "/images/modernQuiffpng.png",
      "name": "Modern Quiff",
      "value": 37.00
    },
    {
      "cut": "cortes-medios",
      "image": "/images/disconnectedUndercut.png",
      "name": "Disconnected Undercut",
      "value": 44.00
    }
]

export const cortes = {
    getAll: (): Corte[] => {
        return data;
  },
  getFromType: (type: Cortes[]): Corte[] => {
    return data.filter(item => type.includes(item.cut));
  },
  getFromName: (name: string) => {
    return data.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
  }
}