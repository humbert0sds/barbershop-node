type Cortes = '' | 'all' | 'cortes-curtos' | 'cortes-medios';

type Corte = {
    cut: Cortes,
    image: string,
    name: string,
    value: number
}

const data: Corte[] = [
    {
      "corte": "all",
      "image": "url_imagem_1.jpg",
      "name": "Corte Clássico",
      "value": 30.00
    },
    {
      "corte": "cortes-curtos",
      "image": "url_imagem_2.jpg",
      "name": "Undercut",
      "value": 35.00
    },
    {
      "corte": "cortes-curtos",
      "image": "url_imagem_3.jpg",
      "name": "Buzz Cut",
      "value": 25.00
    },
    {
      "corte": "cortes-curtos",
      "image": "url_imagem_4.jpg",
      "name": "Fade",
      "value": 30.00
    },
    {
      "corte": "cortes-curtos",
      "image": "url_imagem_5.jpg",
      "name": "Caesar Cut",
      "value": 28.00
    },
    {
      "corte": "cortes-curtos",
      "image": "url_imagem_6.jpg",
      "name": "Ivy League",
      "value": 32.00
    },
    {
      "corte": "cortes-curtos",
      "image": "url_imagem_7.jpg",
      "name": "Crew Cut",
      "value": 27.00
    },
    {
      "corte": "cortes-curtos",
      "image": "url_imagem_8.jpg",
      "name": "Spiky Hair",
      "value": 29.00
    },
    {
      "corte": "cortes-curtos",
      "image": "url_imagem_9.jpg",
      "name": "High and Tight",
      "value": 31.00
    },
    {
      "corte": "cortes-curtos",
      "image": "url_imagem_10.jpg",
      "name": "French Crop",
      "value": 33.00
    },
    {
      "corte": "cortes-medios",
      "image": "url_imagem_11.jpg",
      "name": "Quiff",
      "value": 40.00
    },
    {
      "corte": "cortes-medios",
      "image": "url_imagem_12.jpg",
      "name": "Pompadour",
      "value": 45.00
    },
    {
      "corte": "cortes-medios",
      "image": "url_imagem_13.jpg",
      "name": "Side Part",
      "value": 38.00
    },
    {
      "corte": "cortes-medios",
      "image": "url_imagem_14.jpg",
      "name": "Slicked Back",
      "value": 42.00
    },
    {
      "corte": "cortes-medios",
      "image": "url_imagem_15.jpg",
      "name": "Textured Crop",
      "value": 39.00
    },
    {
      "corte": "cortes-medios",
      "image": "url_imagem_16.jpg",
      "name": "Comb Over",
      "value": 41.00
    },
    {
      "corte": "cortes-medios",
      "image": "url_imagem_17.jpg",
      "name": "Modern Quiff",
      "value": 37.00
    },
    {
      "corte": "cortes-medios",
      "image": "url_imagem_18.jpg",
      "name": "Disconnected Undercut",
      "value": 44.00
    }
]

export const cortes = {
    getAll: (): Corte[] => {
        return data;
    }
}