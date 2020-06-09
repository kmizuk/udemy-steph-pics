import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: "" }
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);//③apiとstateを連携
    }

    render() {
        return (
            <div className="ui segment">
                <form
                    onSubmit={this.onFormSubmit}//④送信時に機能発動
                    className="ui form"
                >
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            onChange={(e) => this.setState({ term: e.target.value })}//①入力した文字でstate更新
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;