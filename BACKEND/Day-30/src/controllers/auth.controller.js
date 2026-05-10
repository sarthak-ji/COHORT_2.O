export async function registerUser(req, res, next){

    // res.status(201).json({
    //     message: "User registered successfully"
    // });

    try {
        console.log(user);
    } catch (err) {
        err.status = 500;
        next(err);
    }
}