require 'test_helper'

class EarningsControllerTest < ActionController::TestCase
  setup do
    @earning = earnings(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:earnings)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create earning" do
    assert_difference('Earning.count') do
      post :create, earning: { ee_category_id: @earning.ee_category_id, name: @earning.name, sum: @earning.sum, user_id: @earning.user_id }
    end

    assert_redirected_to earning_path(assigns(:earning))
  end

  test "should show earning" do
    get :show, id: @earning
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @earning
    assert_response :success
  end

  test "should update earning" do
    patch :update, id: @earning, earning: { ee_category_id: @earning.ee_category_id, name: @earning.name, sum: @earning.sum, user_id: @earning.user_id }
    assert_redirected_to earning_path(assigns(:earning))
  end

  test "should destroy earning" do
    assert_difference('Earning.count', -1) do
      delete :destroy, id: @earning
    end

    assert_redirected_to earnings_path
  end
end
