import img from '../../assets/icon.png'

export const Notfound = () => {
    return (
        <>
            <div className="Login">
                <div className="LoginDiv">
                    <div><img style={{ height: 40 }} src={img} /></div>
                    <h4>404 No Blogs Found!</h4>
                    <a href='/home'>
                        Return back to home.
                    </a>
                </div>
            </div>
        </>
    )
}