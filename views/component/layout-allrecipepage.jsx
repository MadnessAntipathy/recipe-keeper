var React = require('react');
const file = require ('../../data.json');
//////////////////PAGE STYLING HAPPENS HERE//////////////////
class Allrecipepage extends React.Component {

  render() {
    //code logic goes here
    var allTimeFavorites = file["recipes"].map((obj,index)=>{
      if (obj.atf === "on"){
        var recipeLink = "/recipes/"+index;
        return <a class="dropdown-item" href={recipeLink}>{obj.title}</a>
      }
    })
    var sortedRecipes = file.recipes.map((obj)=>{
      return <option value={obj.title}/>
    })
// <a class="navbar-brand" href="#">Quick Food Access</a>
    return (
      <html>
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
          <link rel="stylesheet" type="text/css" href="/css/style.css"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
          <title>Recipe Keeper 1.0</title>
        </head>
        <header>
          <div>
            <h1 id="title">My Food Book</h1>
          </div>
        </header>
        <body>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li id="nav-list" class="nav-item">
                <a class="nav-link" href="/recipes/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li id="nav-list" class="nav-item">
                <a class="nav-link" href="/recipes/new">Create recipe <span class="sr-only">(current)</span></a>
              </li>
              <li id="nav-list" class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Favorites
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  {allTimeFavorites}
                </div>
              </li>
              <li id="nav-list" class="nav-item">
                <a class="nav-link" href="/ingredients">Ingredient list<span class="sr-only">(current)</span></a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0" method="get" action="/search">
              <input class="form-control mr-sm-2" name="q" type="text" placeholder="Search" aria-label="Search" list="recipes"/>
              <datalist id="recipes">
              {sortedRecipes}
              </datalist>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <div id="page-content">
          <div id="main-image">
            <img class="responsive" id="recipe-header" src="/images/feast.jpg"/>
          </div>
          <div>
            {this.props.children}
          </div>
        </div>
        <footer>
        <p>If you use this app, you agree to contribute to the recipe list with one recipe a day till you stop breathing.</p>
        </footer>

          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

        </body>
      </html>
    );
  }
}

module.exports = Allrecipepage;
