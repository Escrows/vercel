const Wallet = ({action}) => {
    return(
        <div className="center">
            <img onClick={action} className="image" src="./WEB3.svg" />
        </div>
    )
}

export default Wallet