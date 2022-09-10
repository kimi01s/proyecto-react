const Articulos=({ Photos })=>{
    const open = url => window.open(url)
    return(
        <div className="row">
            {Photos.map(photo=>(
                <div className="col-12 col-md-4 col-lg-3 mb-2" key={photo.id}>
                    <div className="card" onClick={()=> open(photo.links.html)} style={{cursor:"pointer"}}>
                        <img className="card-img-top" alt="..." src={photo.urls.regular} />
                        <div className="card-header">
                            <h5 className="lead">{photo.user.name}</h5>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <small>
                                {
                                     photo.description || photo.alt_description ? 
                                     photo.description || photo.alt_description : 'No description'
                                 }
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Articulos