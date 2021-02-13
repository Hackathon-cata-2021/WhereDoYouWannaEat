// import './Homepage.css';
import InterestButton from './interest-button/InterestButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import {axiosCalls} from './Utils';

function setData(){};
function buttonOnClick(buttonValue) {
    let url = "https://maps.googleapis.com/maps/api/place/textsearch/json?input=" + buttonValue + "&inputtype=textquery&fields=name,rating,opening_hours,place_id&radius=4000&key=AIzaSyCJoZQo8YwkU6LNHDWwMcPwd9DY5Kl4Neo";
    const fetchData = async () => {
        await axiosCalls(url)
            .then((res) => (setData(res.data.results)));
    }
}

function Interests() {
    return (
        <div className="App">
            <div id="food">
                <h3>Food</h3>
                <InterestButton type="button" buttonText="Sandwich" onClick={() => buttonOnClick('sandwich+shop')}/>
                <InterestButton type="button" buttonText="Asian" onClick={() => buttonOnClick('asian+restaurant')}/>
                <InterestButton type="button" buttonText="Italian" onClick={() => buttonOnClick('italian+restaurant')}/>
                <InterestButton type="button" buttonText="Mexican" onClick={() => buttonOnClick('mexican+restaurant')}/>
                <InterestButton type="button" buttonText="Fast Food" onClick={() => buttonOnClick('fast+food+restaurant')}/>
                <InterestButton type="button" buttonText="Pizza" onClick={() => buttonOnClick('pizza+restaurant')}/>
                <InterestButton type="button" buttonText="Chicken" onClick={() => buttonOnClick('chicken+restaurant')}/>
                <InterestButton type="button" buttonText="Burgers" onClick={() => buttonOnClick('burger+restaurant')}/>
                <InterestButton type="button" buttonText="American" onClick={() => buttonOnClick('american+restaurant')}/>
            </div>
            <br />
            {/* <div id='books'>
                <InterestButton type="button" buttonText="" >Sandwich</InterestButton>
            </div> */}

            {/* <div id='movies'>
                <InterestButton type="button" buttonText="" >Sandwich</InterestButton>
            </div> */}

            {/* <div id='music'>
                <InterestButton type="button" buttonText="" >add music here</InterestButton>
            </div> */}

            <div id='other'>
                <h3>Other Stuffs</h3>

                <InterestButton type="button" buttonText="Art" onClick={() => buttonOnClick('art+museum')}/>
                <InterestButton type="button" buttonText="History" onClick={() => buttonOnClick('history+museum')}/>
                <InterestButton type="button" buttonText="STEM" onClick={() => buttonOnClick('science+museum')}/>
                <InterestButton type="button" buttonText="Beaches" onClick={() => buttonOnClick('beach')}/>
                <InterestButton type="button" buttonText="Parks" onClick={() => buttonOnClick('park')}/>
                <InterestButton type="button" buttonText="Coffee" onClick={() => buttonOnClick('coffee+shop')}/>
                {/* will be changed to dropdowns */}
                <InterestButton type="button" buttonText="Books" onClick={() => buttonOnClick('book+store')}/>
                <InterestButton type="button" buttonText="Movies" onClick={() => buttonOnClick('movie+theater')}/>
                <InterestButton type="button" buttonText="Music" onClick={() => buttonOnClick('music+venue')}/>
            </div>

        </div>
    );
}

export default Interests;