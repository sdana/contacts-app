// const saveDatabase = (localStorageKey, databaseObject) => {
//     const dataString = JSON.stringify(databaseObject)
//     localStorage.setItem(localStorageKey, dataString)
// }

//function to retreive data from local storage
const getDatabase = () => {
    const localContactDB = localStorage.getItem("contactsDB")
    if (localContactDB === null){
        const contactsDB = []
        return contactsDB
    }
    else {
        JSON.parse(contactsDB)
        return contactsDB
    }
}

module.exports = getDatabase