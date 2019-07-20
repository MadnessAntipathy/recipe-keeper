var React = require('react');
var Allrecipepagelayout = require('./component/layout-allrecipepage.jsx')
var Allrecipepagecomponent = require('./component/component-allrecipepage.jsx')

//////////////////THE USER WILL SEE THIS RENDERED//////////////////
class Home extends React.Component {

  render() {
    //code logic goes here
    var recipes = this.props.recipes
    var theRecipe = this.props.therecipe
    var showRecipe = recipes[theRecipe]
    var recipeEditLink = "/recipes/"+theRecipe+"?_method=PUT"
    var date = new Date();
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var formattedDate = date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
    var updatedString = "Updated on " + formattedDate;

    return (
      <Allrecipepagelayout>
        <div>
          <p id="list-of-recipe-text">You are currently editing {showRecipe.title}</p>
        </div>
        <div id="recipe-box">
          <div>
            <form action={recipeEditLink} method="post">
              <p>Dish title</p>
              <input name="title" type="text" placeholder={showRecipe.title} value={showRecipe.title}/><br/>
              <p>Ingredient iist</p>
              <textarea name="ingredients" rows="2" cols="25" placeholder={showRecipe.ingredients} value={showRecipe.ingredients} style={{height:100+"px", width:400+"px"}}></textarea><br/>
              <p>Preparation instructions</p>
              <textarea name="instructions" rows="2" cols="25" placeholder={showRecipe.instructions} value={showRecipe.instructions} style={{height:100+"px", width:400+"px"}}></textarea><br/><br/>
              <input type="hidden" name="createdon" value={showRecipe.createdon}/><br/><br/>
              <input type="hidden" name="id" value={showRecipe.id}/><br/><br/>
              <input type="hidden" name="updatedon" value={updatedString}/><br/><br/>
              <p>Set as favorite?</p>
              <input type="checkbox" name="atf" checked={showRecipe.atf}/><br/><br/>
              <button className="btn btn-secondary" value="" type="submit">Update recipe</button>
            </form>
          </div>
        </div>
        <br/>
        <div>
          <form action="/recipes" method="get">
            <button className="btn btn-secondary" value="" type="submit">Back to list</button>
          </form>
        </div>
      </Allrecipepagelayout>
    );
  }
}

module.exports = Home;
