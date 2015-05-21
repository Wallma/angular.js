require 'test_helper'

class VegansControllerTest < ActionController::TestCase
  setup do
    @vegan = vegans(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:vegans)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create vegan" do
    assert_difference('Vegan.count') do
      post :create, vegan: { language_id: @vegan.language_id, name: @vegan.name }
    end

    assert_redirected_to vegan_path(assigns(:vegan))
  end

  test "should show vegan" do
    get :show, id: @vegan
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @vegan
    assert_response :success
  end

  test "should update vegan" do
    patch :update, id: @vegan, vegan: { language_id: @vegan.language_id, name: @vegan.name }
    assert_redirected_to vegan_path(assigns(:vegan))
  end

  test "should destroy vegan" do
    assert_difference('Vegan.count', -1) do
      delete :destroy, id: @vegan
    end

    assert_redirected_to vegans_path
  end
end
