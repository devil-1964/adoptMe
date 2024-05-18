const fetchSearch = async ({ queryKey }) => {
    const { animal, location, breed } = queryKey[1];
    const res = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
   
    if (!res.ok) {
        throw new Error("pet search fetch not ok");
    }
    return res.json();
}
export default fetchSearch;