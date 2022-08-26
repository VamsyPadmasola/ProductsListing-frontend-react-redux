import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../UI/Modal";
import { addItemhandler, removeItemhandler } from "../../../../actions";

const ListItem = ({ data }) => {
    // const [counter, setCounter] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const item = useSelector(state => state.cart.items.find(item => item.id === data.id))

    const dispatch = useDispatch()

    const increaseCounter = event => {
        event.stopPropagation();
        dispatch(addItemhandler(data))
    }

    const decreaseCounter = event => {
        event.stopPropagation();
        dispatch(removeItemhandler(data.id))
    }

    const handleModal = () => {
        setShowModal(previousState => !previousState)
    }

    return (
        <>
            <div onClick={handleModal} className={"item-card"}>
                <img className={"img-fluid"} src={`images/img.png`} />
                <div className={"item-card__information"}>
                    <div className={"pricing"}>
                        <span>₹{data.discountedPrice}</span>
                        <small>
                            <strike>{data.price}</strike>
                        </small>
                    </div>
                    <div className={"title"}>
                        <h3>{data.title}</h3>
                    </div>
                </div>
                {
                    !item || item?.quantity < 1 ?
                        <button className={"cart-add"} onClick={increaseCounter}>
                            <span>Add to bag</span>
                            <img className={"img-cart"} src={"/images/add-to-cart.png"} />
                        </button>
                        :
                        <div className="cart-addon">
                            <button onClick={decreaseCounter}><span>-</span></button>
                            <span>{item.quantity}</span>
                            <button onClick={increaseCounter}><span>+</span></button>
                        </div>

                }
            </div>
            {showModal
                &&
                <Modal onClose={handleModal}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={`images/img.png`} />
                        </div>
                        <div className="meta">
                            <h3>{data.title}</h3>
                            <div className={"pricing"}>
                                <span>₹{data.discountedPrice}</span>
                                <small>
                                    <strike>{data.price}</strike>
                                </small>
                            </div>
                            <p>{data.description}</p>
                            {
                                !item || item?.quantity < 1 ?
                                    <button className={"cart-add cart-add__modal"} onClick={increaseCounter}>
                                        <span>Add to bag</span>
                                        <img className={"img-cart"} src={"images/add-to-cart.png"} />
                                    </button>
                                    :
                                    <div className="cart-addon">
                                        <button onClick={decreaseCounter}><span>-</span></button>
                                        <span>{item.quantity}</span>
                                        <button onClick={increaseCounter}><span>+</span></button>
                                    </div>
                            }
                        </div>
                    </div>
                </Modal>
            }
        </>

    );
}

export default ListItem