import Header from '../components/Header'
import Footer from '../components/Footer'
import AddUserForm from '../components/AddUserForm'

const AddUserPage = () => {

  return (
    <div>
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-lg-6 mt-5">
            <AddUserForm />
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddUserPage
