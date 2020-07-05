import React from "react";
import "./delivery.css";

class IconLogo extends React.Component {
  render() {
    const {width = 512, height = 512, color} = this.props;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" height={`${height}px`} viewBox="0 0 512 512"
           width={`${width}px`}>
        <g>
          <g>
            <path
              d="m449.649 307.262-18.956-101.095h29.976v-30h-35.601l-5.625-30.002h-117.452v30h31.907l25.911 190.012h-84.69l-28.814-65.109c14.379-7.521 24.22-22.576 24.22-39.896 0-24.814-20.188-45.002-45.002-45.002h-35.173v-160.35h-190.35v190.349h50.173v60.004h51.771c-19.485 19.073-31.598 45.648-31.598 75.003v15h31.509c6.968 34.194 37.273 60.004 73.495 60.004s66.526-25.81 73.495-60.004h114.658c6.968 34.194 37.273 60.004 73.494 60.004 41.357 0 75.004-33.646 75.004-75.004-.001-37.043-27.002-67.88-62.352-73.914zm-419.649-91.093v-130.349h130.349v130.349zm50.173 60.004v-30.004h145.349c8.272 0 15.002 6.73 15.002 15.002s-6.73 15.002-15.002 15.002zm95.176 30h40.408l26.555 60.003h-140.46c6.967-34.196 37.274-60.003 73.497-60.003zm0 120.007c-19.557 0-36.232-12.543-42.424-30.004h84.848c-6.192 17.461-22.867 30.004-42.424 30.004zm219.196-250.015 24.775 132.132c-13.215 3.206-25.068 9.917-34.523 19.096l-20.622-151.227h30.37zm42.451 250.015c-24.815 0-45.003-20.188-45.003-45.004 0-24.815 20.188-45.003 45.003-45.003s45.004 20.188 45.004 45.003c0 24.816-20.188 45.004-45.004 45.004z"
              data-original="#000000" className="active-path" data-old_color="#000000" fill={color || "#FFFFFF"}/>
          </g>
        </g>
      </svg>
    );
  }
}

class Container extends React.Component {
  render() {
    return (
      <div className="delivery-container">{this.props.children}</div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className="delivery-content">{this.props.children}</div>
    );
  }
}

class DeliveryAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
  }

  render() {
    const {placeholder, onClick} = this.props;
    return (
      <div className="delivery-address">
        <input type="text" value={this.state.address} placeholder={placeholder} onChange={e => this.setState({address: e.target.value})}/>
        <Button color="blue" onClick={onClick}>OK</Button>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    const {variant = "filled", color, children, ...props} = this.props;
    return (
      <button className={`btn ${variant} ${color}`} {...props}>{children}</button>
    );
  }
}

class HorizontalScroll extends React.Component {
  render() {
    const {children, ...props} = this.props;
    return (
      <div className="horizontal-scroll-wrapper" {...props}>{children}</div>
    );
  }
}

class Footer extends React.Component {
  render() {
    const {children, ...props} = this.props;
    return (
      <footer className="delivery-footer" {...props}>
        <div className="social-media"></div>
        <div className="delivery-links">
          <ul>
            <li><a href="#">Delivery Food</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>
        <p className="delivery-copyright">© 2020 Delivery Food - All reserved.</p>
      </footer>
    );
  }
}

class DeliveryGrid extends React.Component {
  render() {
    const {children, className, ...props} = this.props;
    return (
      <div className={`delivery-grid ${this.props.className}`} {...props}>{children}</div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="delivery-header">
        <div className="delivery-header-top">
          <div className="logo">
            <p>Happy Food</p>
            <IconLogo width={40} height={40} color="#68aae4"/>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#/restaurant">Restaurant</a></li>
            <li><a href="#/careers">Careers</a></li>
            <Button variant="outlined">BE PART</Button>
          </ul>
        </div>

        <div className="middle">
          <div className="absolute-left">
            <img src="https://res.cloudinary.com/luneswallet/image/upload/v1593914085/react-examples/Pngtree_green_food_parsley_food_4406517.png"
                 alt="food meal"/>
          </div>
          <div className="center">
            <h1>Are you hungry? We can help you right now :)</h1>
            <DeliveryAddress placeholder="Enter your delivery address"/>
            {this.props.children}
          </div>
          <div className="absolute-right">
            <img src="https://res.cloudinary.com/luneswallet/image/upload/v1593881577/react-examples/FAVPNG_pepper-steak-meat-food_MF6Sfmnk.png"
                 alt="food meal"/>
          </div>
        </div>

      </div>
    );
  }
}

export default class BasePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [{
        name: "McDonalds",
        cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593890809/react-examples/mcdonalds.png"
      }, {
        name: "Uber Eats",
        cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593890860/react-examples/uber-eats.jpg"
      }, {
        name: "Pizza Hut",
        cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593890917/react-examples/pizza-hut.jpg"
      }, {
        name: "Ben & Jerry's",
        cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593890997/react-examples/ben-jerrys.png"
      }, {
        name: "Outback",
        cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593891054/react-examples/outback.jpg"
      }, {
        name: "Subway",
        cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593891137/react-examples/subway.png"
      }],
      categories: [{
        name: "Health Food",
        cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593884703/react-examples/meal01.jpg"
      }, {
        name: "Local Culinary",
        cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593885474/react-examples/meal02.jpg"
      }, {
        name: "Best Places",
        cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593885521/react-examples/meal03.webp"
      }, {
        name: "Fast Food",
        cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593886735/react-examples/food01.jpg"
      }, {
        name: "Pizza",
        cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593886796/react-examples/pizza.jpg"
      }, {
        name: "Ice Cream",
        cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593887710/react-examples/ice-cream2.jpg"
      }, {
        name: "Burguer",
        cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593887779/react-examples/burguer.jpg"
      }]
    };
  }

  render() {
    const {stores, categories} = this.state;
    return (
      <Container>
        <Header>
          <DeliveryGrid className="header-cards">
            {stores.map((store, i) => (
              <div key={i} className="delivery-card stores">
                <div className="image" style={{"background-image": `url(${store.cover})`}}/>
                <p>{store.name}</p>
              </div>
            ))}
          </DeliveryGrid>
        </Header>
        <Content>
          <h1>Categories</h1>
          <DeliveryGrid>
            {categories.map((category, i) => (
              <div key={i} className="delivery-card">
                <div className="image" style={{"background-image": `url(${category.cover})`}}/>
                <p>{category.name}</p>
              </div>
            ))}
          </DeliveryGrid>
        </Content>
        <Content>
          <h1>Stores</h1>
          <HorizontalScroll>
            {stores.map((store, i) => (
              <div key={i} className="delivery-card stores">
                <div className="image" style={{"background-image": `url(${store.cover})`}}/>
                <p>{store.name}</p>
              </div>
            ))}
          </HorizontalScroll>
        </Content>
        <Footer/>
      </Container>
    );
  }
}