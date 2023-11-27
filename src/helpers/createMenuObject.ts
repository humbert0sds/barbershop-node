type MenuOptions = '' | 'all' | 'cortesCurtos' | 'cortesMedios'

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        cortesCurtos: false,
        cortesMedios: false
    }

    if (activeMenu !== '') {
        returnObject[activeMenu] = true
    }

    return returnObject
};