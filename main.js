
async function fetchall() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts'):
            let data = response.json():

        for (i = 0; i < data.length; i++) {
            console.log(data[i])
        }







    }

    catch (error) {
        console.log(error)

    }
}