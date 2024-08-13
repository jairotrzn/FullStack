const Statics = ({ text, value }) => {
    if (value === 0) {
        return (
            <div>
               {text}: No hay valores
            </div>
        );
    } else {
        return (
            <div>
                <p>{text}: {value.toFixed(2)}</p>
            </div>
        );
    }
};

export default Statics;
