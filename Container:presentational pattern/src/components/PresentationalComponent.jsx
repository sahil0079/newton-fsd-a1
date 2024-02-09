const PresentationalComponent = ({ data }) => {

    return (
        <div>
            <ul>
                {
                    data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PresentationalComponent;