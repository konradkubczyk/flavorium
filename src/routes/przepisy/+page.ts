export async function load() {

    const res = await fetch(
        `https://cloud.appwrite.io/v1/databases/655bd832ea6f472b15d8/collections/655bd852b4a5ec1fd409/documents`,
        {
            headers: {
                'X-Appwrite-Project': '6556209062be5c6ce4b0',
                'Content-Type': 'application/json'
            }
        }
    );
    const data = await res.json();

    return {
        recipes: data.documents
    }
}
