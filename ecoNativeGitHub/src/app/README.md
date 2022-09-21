Interim (front end functionalities):
- Nav Bar to navigate to various pages
- Footer with useful information/links

1) Home page
- Products listed along with the category that they belong to
- Can hover over the image and click to navigate to product details page
- Image slide show, can click previous and next to view brand banners
- Search bar to search for a particular product
- Product filter, to filter by product category

2) About page
- More info on brand (text)
- Video to raise awareness about environmental conservation

3) Product Details Page
- Add to favorites
- Add to cart (can proceed to checkout directly after adding to cart) [CREATE]
- Click to view similiar products (routes to the home page and automatically filters
products in the same category)
- View more information on the products (price, description, delivery & return information)
- Edit product details (Admin functionality) -> routes to edit/detail product page 

4) Cart page
- View products added to cart [READ]
- Clicking on image routes to product details page
- As u edit the quantity of item, the total price changes too. This applies to the order details and 
order summary page as well, the value will be update accordingly. [UPDATE]
- Abililty to remove item from cart [DELETE]
- Proceed to checkout

5) Checkout
- Fill in order details (with validators, no field can be left blank)
- Contains items added to cart with total price and quantity of each item listed
- Alert Dialog is triggered when user submits valid order details and then they are redirected to the order summary page

6) Order Summary Page
- Lists items added to checkout along with order details filled in checkout page
- Confirm Order button, confirms order and redirects user back to home page

7) Not found component
- If page is empty, instead of showing a blank page for example, it will say 'cart is empty!'
- This component is included in the search component, favorites component and cart component

8) Favorites page
- Can add items to favorites
- Can delete items from favorites
- Can hover over the image and click to navigate to product details page
- From product details page user can add their favorite item to cart

9) Login & Register
- Both have form validations at the moment (cannot be empty, email validator & minLength for selected fields)
- Alert dialog triggered when form is valid and button is clicked(for both register and login)

10) User profile
- Has hard coded values at the moment due to lack of user authentication 
- Has form validations (cannot be empty, email validator and minLength for selected fields)
- Alert dialog triggered when form is valid and update profile button is clicked
- Alert dialog triggered when delete account button is clicked

11) Admin functionalities:
- Admin user can add product(located in nav bar), edit product(button in product details page)
- Edit form contains existing product details in the form, from which admin can edit
- Form validations have been added to both edit product page and add product form (cannot be empty & minLength for selected fields)
- Alert dialog triggered when form is valid and update product details button is clicked
- Alert dialog triggered when delete product details button is clicked

