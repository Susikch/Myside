let getDataFromJSONPlaceholder = async() => {
    try{
        console.log("start")
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        if (!response.ok) console.log("Error")

        let data = await response.json()
        console.log("our data", data)
    } catch (error) {
         console.log("Error detected:", error)
    } finally {
        console.log("Service ended")
    }
}

getDataFromJSONPlaceholder()
