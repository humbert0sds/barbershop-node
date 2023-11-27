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
        image: 'images/buzzCut.png',
        name: 'buzz Cut',
        value: 45.00,
    },
    {
        type: 'cortesCurtos',
        image: 'images/caesarCut.png',
        name: 'caesar Cut',
        value: 45.00,
    },
    {
        type: 'cortesCurtos',
        image: 'images/Fade.png',
        name: 'Fade',
        value: 50.00,
    },
    {
        type: 'cortesCurtos',
        image: 'images/undercut.png',
        name: 'undercut',
        value:50.00,
    },
    {
        type: 'cortesCurtos',
        image: 'images/crewCut.png',
        name: 'crew Cut',
        value: 50.00,
    },
    {
        type: 'cortesCurtos',
        image: 'images/ivyLeague.png',
        name: 'ivy League',
        value: 50.00,
    },
    {
        type: 'cortesCurtos',
        image: 'images/highAndTight.png',
        name: 'high And Tight',
        value: 50.00,
    },
    {
        type: 'cortesCurtos',
        image: 'images/spikyHair.png',
        name: 'spiky Hair',
        value: 50.00,
    },
    {
        type: 'cortesCurtos',
        image: 'images/frenchCrop.png',
        name: 'french Crop',
        value: 50.00,
    },
    {
        type: 'cortesCurtos',
        image: 'images/combOver.png',
        name: 'comb Over',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'images/disconnectedUndercut.png',
        name: 'Disconnected Undercut',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'images/fotoCorteClassico.png',
        name: 'Corte classico',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'images/modernQuiffpng.png',
        name: 'modern Quiff',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'images/Pompadour.png',
        name: 'Pompadour',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'images/Quiff.png',
        name: 'Quiff',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'images/sidePart.png',
        name: 'side Part',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'images/slickedBack.png',
        name: 'slicked Back',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'images/texturedCrop.png',
        name: 'textured Crop',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'images/combOver.png',
        name: 'comb Over',
        value: 50.00,
    },
    {
        type: 'cortesMedios',
        image: 'images/modernQuiffpng.png',
        name: 'modern Quiff',
        value: 50.00,
    },
]

export const cortes = {
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