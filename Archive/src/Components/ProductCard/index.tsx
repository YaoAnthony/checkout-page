
//motion
import { motion } from 'framer-motion';

//antd
import { message } from 'antd';

//style
import style from './style.module.scss';

//react-router-dom
import { NavLink, useNavigate } from 'react-router-dom';

//redux
import { useDispatch,useSelector } from 'react-redux';
import { addFavorite } from '../../Features/profile/profileSlice';

//icons
import { HeartOutlined } from '@ant-design/icons';

//types
import { Product } from '../../Types/product';


// Define props interface
interface ShowProduct {
    product: Product;
}

const ProductCard: React.FC<ShowProduct> = ({product}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLike = (id :string)  => {
        const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
        //if user not login, show message and redirect to login page
        if(!isLoggedIn){
            message.warning(`Please login to add to your wishlist!`);
            navigate('/auth');
            return;
        }
        dispatch(addFavorite(id));
        //TODO: add to wishlist if login, else show login modal
        message.success(`Product added to your wishlist!`)
    }

    return(
        <motion.div className="w-[300px] flex flex-col justify-center items-center gap-5">
            <div className="relative w-[300px] h-[300px] bg-gray-200 rounded-[10px] overflow-hidden">
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleLike(product.id)}
                    className={`${style.glassmorphism} absolute top-3 right-5 w-8 h-8 flex justify-center items-center text-white hover:text-heart text-md rounded-full border`}>
                    <HeartOutlined />
                </motion.div>
                <NavLink to={`/asset/${product.id}`}>
                    <img src={product.image[0]} alt="" className="w-full h-full object-cover"/>
                </NavLink>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <NavLink 
                    to={`/asset/${product.id}`}
                    className="w-full text-start">
                    <span>{product.name}</span>
                </NavLink>
                <div className='w-full flex justify-between'>
                    <p className="text-sm text-start text-gray-500">by {product.authorName}</p>
                    <p className="text-sm text-start text-gray-500">{product.price}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductCard;