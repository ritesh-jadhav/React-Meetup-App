import { useContext } from 'react';
import FavouritesContext from '../../store/favourites-context';
import Card from '../UI/Card';
import classes from './MeetupItem.module.css';

const MeetupItem = (props) => {
    const favouritectx = useContext(FavouritesContext);
    const itemIsFavourite = favouritectx.itemIsFavourite(props.id);
    const toggleFavouriteStatusHandler = () => {
        if (itemIsFavourite){
            favouritectx.removeFavourite(props.id);
        }else{
            favouritectx.addFavourite({
                id : props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    };


return <li className={classes.item}>
    <Card>
    <div className={classes.image}>
        <img src={props.image} alt={props.title} />
    </div>
    <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </div>
    <div className={classes.actions}>
        <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? 'Remove from favorites' : 'To Favorites'}
        </button>
    </div>
    </Card>
</li>
};

export default MeetupItem;