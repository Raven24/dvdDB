require 'test_helper'

class ImdbControllerTest < ActionController::TestCase
  test "should get fetch" do
    get :fetch
    assert_response :success
  end

end
