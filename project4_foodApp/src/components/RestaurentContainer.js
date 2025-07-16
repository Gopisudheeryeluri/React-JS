import {CDN_URL} from '../utils/constants';

const RestaurentContainer = (data) => {
    // console.log(data);
    const { restaurentData } = data;
    console.log("restaurentData",restaurentData);
    console.log("name",restaurentData.info.name);
    const imglink = CDN_URL + restaurentData.info.cloudinaryImageId;
   
    return (
        <div className='restaurent_card'>
            <img id='card_img' src={imglink}/>
            <h2>{restaurentData.info.name}</h2>
            <h3>{restaurentData.info.avgRating}</h3>
            <p>{restaurentData.info.cuisines.join(',')}</p>
        </div> 
    )
}

export default RestaurentContainer;