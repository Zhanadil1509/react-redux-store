import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPhones} from '../../actions'
import {getPhones} from '../../selectors'
import {Link} from 'react-router-dom'

class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones()
  }

  renderPhone = (v, i) => {
    return(
      <div className={'col-sm-4 col-lg-4 col-md-4 book-list'} key={i}>
        <div className="thumbnail">
          <img src={v.image} className="img-thumbnail" alt={v.name} />
          <div className="caption">
            <h4 className="pull-right">${v.price}</h4>
            <h4 className={''}>
              <Link to={`/phones/${v.id}`}>
                  {v.name}
                </Link>
            </h4>
            <p>{v.description}</p>
            <p className="itemButton">
              <button className="btn btn-primary">Buy</button>
            </p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {phones} = this.props
    return (
      <div className={'books row'}>
        {
          phones.map((v, i) => this.renderPhone(v, i))
        }
      </div>
    )
  }
}


const mapStateToProp = (state) => {
    return {
      phones: getPhones(state)
    }
}

const mapDispatchToProps = {
  fetchPhones
}

export default connect(mapStateToProp, mapDispatchToProps)(Phones)
