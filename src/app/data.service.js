class DataService{
    constructor(){

    }

    getData(){
        const data = {
            "people": [
                {
                    "id": 1,
                    "name": "Olha",
                    "postsId": [1, 4]
                },
                {
                    "id": 2,
                    "name": "Kate",
                    "postsId": [2]
                },
                {
                    "id": 1,
                    "name": "Anna",
                    "postsId": [3]
                }
            ],
            "posts": [
                {
                    "id": 1,
                    "title": "bla-bla",
                    "content": "ghcshhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
                },
                {
                    "id": 1,
                    "title": "bla-bla",
                    "content": "ghcshhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
                },
                {
                    "id": 1,
                    "title": "bla-bla",
                    "content": "ghcshhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
                },
                {
                    "id": 1,
                    "title": "bla-bla",
                    "content": "ghcshhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
                }
            ] 
            };
        return new Promise((resolve, reject) => {
                resolve(data);
        });
    }
}

export const dataService = new DataService() 