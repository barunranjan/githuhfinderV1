import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Enter something', 'light');
    }
    this.props.searchUser(this.state.text);
    this.setState({ text: '' });
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search User'
            value={this.state.text}
            onChange={this.onChange}
          ></input>
          <input
            type='submit'
            className='btn btn-dark btn-block'
            value='search'
          ></input>
          {this.props.showClear && (
            <button
              className='btn btn-light btn-block'
              onClick={this.props.clearUser}
            >
              Clear
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
