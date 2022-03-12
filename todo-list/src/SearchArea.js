import Logic from './Logic';

function SearchArea(){

    return (
      <div>
      Search Bar:
      <div className="mb-3">
        <label for="search" className="form-label"></label>
        <input onChange={(e) => Logic.updateCurrentItem(e)} value={Logic.item} type="text" className="form-control" name="search" id="" placeholder="Type Here...  " />
      </div>

      <div className="d-grid gap-2"> 
        <button type="button" name="search-but" id="" className="btn btn-primary" onClick={Logic.addToList}>
          Add
        </button>
      </div>
      </div>
    );
}

export default SearchArea;