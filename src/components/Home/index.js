import React, { Component } from 'react';
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';






class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
      products: [
        {id:1, category: 'Sporting Goods', price: '$49.99', discription: 'Football'},
        {id:2, category: 'Sporting Goods', price: '$9.99', discription: 'Baseball'},
        {id:3, category: 'Sporting Goods', price: '$29.99', discription: 'Basketball'},
        {id:4, category: 'Electronics', price: '$99.99', discription: 'iPod Touch'},
        {id:5, category: 'Electronics', price: '$399.99',  discription: 'iPhone 5'},
        {id:6, category: 'Electronics', price: '$199.99', discription: 'Nexus 7'}
      ],
    };
  }
  // Adds Id
  handleAddProduct = (idInput) => {
    this.setState({
      products: this.state.products.concat([{ id: idInput.target.value }])
    });
    // alert('Added');
  }
 
  //Set state of user with snapshot
  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    )
    
  }

  render() {
    const { users } = this.state;
    
    return (
      <div>
      <div>

        

        <h1>Home</h1>
        <p>This is the home page</p>

        { !!users && <UserList users={users} /> }
      </div>
    
    <div class="container">
    <div class="orangeText boldText padding10">Home Page: Product Management</div>        
      <div class="headerBarblock">
        <div class="floatLeft boldText">&minus;</div>
          <div class="floatLeft paddingLeft10">Product Inventory</div>
          <div class="clear"></div>
      </div>
   
      <div class="headercontentblock1">                      
          <div class="container1"> 
            <div class="floatLeft scanner"></div>
              <div class="floatLeft selectWidth85 marginLeft20">
                <div class="boldText">Enter Id</div>
                  <div class="spacer2"></div>
                  <div class="floatLeft selectWidth15">
                      <input discription="entertext" type="text" class="inputboxBg selectWidth45" size="15" maxlength="15" placeholder="" 
                     value ={this.state.idInput}
                      onChange={this.handleAddProduct}
                      />
                      <div class="padding10">*Qty</div>
                  </div>
                  <div class="floatLeft selectWidth45">
                      <input discription="entertext" type="text" class="inputboxBg selectWidth80" size="15" maxlength="15" placeholder=""/>
                      <div class="padding10">*Item ID, UPC, SIM, or IMEI</div>
                  </div>
                  <div class="floatLeft selectWidth25">
                       <label class="custom-select selectWidth90">
                          <select>
                              <option selected> AB1234 </option>
                              <option value="Option 1">- Select two -</option>
                              <option value="Option 2">- Select three -</option>
                          </select>
                      </label>
                      <div class="padding10">Sales Rep</div>
                  </div>
                  <div class="floatLeft selectWidth15">
                      <input type="submit" value=" Quick Add " class="greenButton" disabled/>
                  </div>                
                  <div class="clear"></div>
                  <div class="spacer2"></div>                	
              </div>
              <div class="clear"></div>                                                            	                
          </div>
          <div class="sharpblueBar">Added Items</div>            
          <div class="alignCenter padding15">
              <div class="floatLeft selectWidth20 alignLeft blueText">
                <div class="floatLeft selectWidth70">Edit item</div>
                  <div class="floatLeft">|</div>
                  <div class="floatRight trashBlack"></div>
                  <div class="clear"></div>
              </div>               
              <div class="floatLeft selectWidth15">Id:</div>
              <div class="floatLeft selectWidth45 alignLeft">
              <ul>
        {
          this.state.products.map(function(products){
            return <li>{products.id}: {products.category}: {products.price} {products.discription}</li>;
          })
        }
        </ul>

              </div>
              <div class="floatLeft selectWidth10">1</div>
              <div class="floatLeft selectWidth10 alignRight">$5.00</div>
              <div class="clear"></div>
          </div>
          <div class="alignCenter padding15 greybgContent">
              <div class="floatLeft selectWidth20 alignLeft blueText">
                <div class="floatLeft selectWidth70">Edit item</div>
                  <div class="floatLeft">|</div>
                  <div class="floatRight trashBlack"></div>
                  <div class="clear"></div>
              </div>               
              <div class="floatLeft selectWidth15">12345</div>
              <div class="floatLeft selectWidth45 alignLeft">ItemDiscriptionHere</div>
              <div class="floatLeft selectWidth10">2</div>
              <div class="floatLeft selectWidth10 alignRight">$xx.xx</div>
              <div class="clear"></div>
          </div>
          <div class="alignCenter padding15">
              <div class="floatLeft selectWidth20 alignLeft blueText">
                <div class="floatLeft selectWidth70">Edit item</div>
                  <div class="floatLeft">|</div>
                  <div class="floatRight trashBlack"></div>
                  <div class="clear"></div>
              </div>                
              <div class="floatLeft selectWidth15">54321</div>
              <div class="floatLeft selectWidth45 alignLeft">ItemDiscriptionHere</div>
              <div class="floatLeft selectWidth10">1</div>
              <div class="floatLeft selectWidth10 alignRight">$xx.xx</div>
              <div class="clear"></div>
          </div>                        
          <div class="omblueLine"></div>
          <div class="container1">
            <div class="blueText boldText">These items will be tied to Sales Rep AB1234.</div>
              <div>To change the rep, select from dropdown.</div>
              <div class="spacer2"></div>
              <div class="boldText">
                ACME Any City, USA<br/>
                (555) 555-5555
              </div>
              <div class="spacer2"></div>
              <div class="floatLeft selectWidth15">
                  <input type="submit" value=" Update Stock " class="blueButton"/>
              </div>                
              <div class="clear"></div>
          </div>
      </div>
    
     
    <div class="headercontentblock0"></div>
    
    <div class="spacer2"></div>        
  </div> 
  </div>
);
  

  }
}
const UserList = ({ users }) =>
  <div>
    <h2>List of UserDiscriptions of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].userDiscription}</div>
    )}

    </div>
	
  
  

  
const authCondition = (authUser) => !!authUser;



export default withAuthorization(authCondition)(HomePage);

