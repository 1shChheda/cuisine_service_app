import express from 'express';
import { getFoodAvailability, getFoodIn30Min, getRestaurantById, getTopRestaurants, searchFoods, getAvailableOffers } from '../controllers';

const router = express.Router();


// Food Availability
router.get('/:pincode', getFoodAvailability);

// Top Restaurants
router.get('/top-restaurants/:pincode', getTopRestaurants);

// Foods Available in 30 mins
router.get('/foods-in-30-min/:pincode', getFoodIn30Min);

// Search Foods
router.get('/search/:pincode', searchFoods);

// Find Restaurant by Id
router.get('/restaurant/:id', getRestaurantById);

// Find Offers
router.get('/offers/hi', getAvailableOffers)

export { router as ShoppingRoute };