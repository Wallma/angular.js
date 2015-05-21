require 'test_helper'

class SexualsControllerTest < ActionController::TestCase
  setup do
    @sexual = sexuals(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:sexuals)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create sexual" do
    assert_difference('Sexual.count') do
      post :create, sexual: { language_id: @sexual.language_id, name: @sexual.name }
    end

    assert_redirected_to sexual_path(assigns(:sexual))
  end

  test "should show sexual" do
    get :show, id: @sexual
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @sexual
    assert_response :success
  end

  test "should update sexual" do
    patch :update, id: @sexual, sexual: { language_id: @sexual.language_id, name: @sexual.name }
    assert_redirected_to sexual_path(assigns(:sexual))
  end

  test "should destroy sexual" do
    assert_difference('Sexual.count', -1) do
      delete :destroy, id: @sexual
    end

    assert_redirected_to sexuals_path
  end
end
