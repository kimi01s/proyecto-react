const Articulos=({ Photos })=>{
    const open = url => window.open(url)
    return(
        <div className="container">
            <div className="row">
                {Photos.map(photo=>(
                    <div className="col-lg-3" key={photo.id}>
                        <div className="card" onClick={()=> open(photo.links.html)} 
                        key={photo.id}
                        style={{cursor:'pointer'}}>
                        <img className="card-img-top" src={photo.urls.regular} alt=""/>
                            <div className="card-body">
                                <h6 className="card-text">{photo.user.name}</h6>
                                <p className="card-text">
                                {
                                    photo.description || photo.alt_description ? 
                                    photo.description || photo.alt_description : 'No description'
                                }
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Articulos