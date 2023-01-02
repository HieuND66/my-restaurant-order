const MenuPage = () => {
  return (
    <div>
      <section className="order" id="order">
        <div className="heading">
          <span>order now</span>
          <h3 className="font-bold">fastest home delivery</h3>
        </div>
        <div className="icons-container">
          <div className="icons">
            <img src="image/icon-1.png" className="mx-auto" />
            <h3 className="font-semibold">7:00am to 10:30pm</h3>
          </div>
          <div className="icons">
            <img src="image/icon-2.png" className="mx-auto" />
            <h3 className="font-semibold">+123-456-7890</h3>
          </div>
          <div className="icons">
            <img src="image/icon-3.png" className="mx-auto" />
            <h3 className="font-semibold">mumbai, india - 400104</h3>
          </div>
        </div>
        <form>
          <div className="flex">
            <div className="inputBox">
              <span>your name</span>
              <input type="text" placeholder="customer's name" />
            </div>
            <div className="inputBox">
              <span>your number</span>
              <input type="number" placeholder="customer's number" />
            </div>
          </div>
          <div className="flex">
            <div className="inputBox">
              <span>your order</span>
              <input type="text" placeholder="food you want" />
            </div>
            <div className="inputBox">
              <span>how much</span>
              <input type="number" placeholder="number or orders" />
            </div>
          </div>
          <div className="flex">
            <div className="inputBox">
              <span>your details</span>
              <input type="text" placeholder="your message" />
            </div>
            <div className="inputBox">
              <span>pick up time</span>
              <input type="datetime-local" />
            </div>
          </div>
          <div className="flex">
            <div className="inputBox">
              <textarea
                placeholder="your address"
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </div>
            <div className="inputBox">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d958.4871256717995!2d108.1833096!3d16.0681619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218fd8d5f2767%3A0x65293dfc4f01af18!2sGreen%20%26%20Brown%20Coffee!5e0!3m2!1svi!2s!4v1645168571942!5m2!1svi!2s"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <button type="submit" className="btn">
            Proceed To Order
          </button>
        </form>
      </section>
    </div>
  );
};
export default MenuPage;
