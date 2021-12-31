export const doFetch = async(businessObject) => {
        try {
            const data = await fetch('http://localhost:8080/order' ,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(businessObject)
            });
            const response = await data.json();
            return response
        } catch (error) {
            console.log(error);
            throw new Error(error);

    }

}