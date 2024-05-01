import sql from 'mssql'

const dbsettings = {
    user : "sa",
    password : "password!",
    server : "localhost",
    database : "Tienda",
    options : {
        encrypt : false,
        trustServerCertificate : true
    }
}


export const getConnection = async () =>
{
    try{
        const pool = await sql.connect(dbsettings);

        // const result = await pool.request().query("select * from Productos");
        // console.log(result);
        return pool;
    }
    catch(error){
        console.error(error);
    }
}

