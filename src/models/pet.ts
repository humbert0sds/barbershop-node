type Types = 'cortesCurtos' | 'cortesMedios';

type Cortes = {
    type: Types,
    image: string,
    name: string,
    value: number,
}

const data: Cortes[] = [
    {
        type: 'cortesCurtos',
        image: 'buzzCut.png',
        name: 'buzz Cut',
        value: 45.00,
    },
    {
        type: 'cortesCurtos',
        image: 'caesarCut.png',
        name: 'caesar Cut',
        value: 45.00,
    },
    {
        type: 'cortesCurtos',
        image: 'Fade.png',
        name: 'Fade',
        value: 50.00,
    },
    {
        type: 'cortesCurtos',
        image: 'undercut.png',
        name: 'undercut',
        value:50.00,
    },
    {
        type: 'cortesCurtos',
        image: 'crewCut.png',
        name: 'crew Cut',
        value: 50.00,
    },
    {
        type: 'cortesCurtos',
        image: '/ivyLeague.png',
        name: 'ivy League',
        value: 50.00,
    },
    {
        type: 'cortesCurtos',
        image: 'highAndTight.png',
        name: 'high And Tight',
        value: 50.00,
    },
    {
        type: 'cortesCurtos',
        image: 'spikyHair.png',
        name: 'spiky Hair',
        value: 50.00,
    },
    {
        type: 'cortesCurtos',
        image: 'frenchCrop.png',
        name: 'french Crop',
        value: 50.00,
    },
    {
        type: 'cortesCurtos',
        image: 'combOver.png',
        name: 'comb Over',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'disconnectedUndercut.png',
        name: 'Disconnected Undercut',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'fotoCorteClassico.png',
        name: 'Corte classico',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'modernQuiffpng.png',
        name: 'modern Quiff',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'Pompadour.png',
        name: 'Pompadour',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'Quiff.png',
        name: 'Quiff',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'sidePart.png',
        name: 'side Part',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'slickedBack.png',
        name: 'slicked Back',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'texturedCrop.png',
        name: 'textured Crop',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'combOver.png',
        name: 'comb Over',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'modernQuiffpng.png',
        name: 'modern Quiff',
        value: 50.00,
    },
]

export const pet = {
    getAll: () => {
        return data;
    },
    getFromType: (type: Types): Cortes[] => {
        return data.filter(item => item.type === type)
    },
    getFromName: (name: string) => {
        return data.filter(item => {
           return item.name.toLowerCase().includes(name.toLowerCase())
        })
    }
}