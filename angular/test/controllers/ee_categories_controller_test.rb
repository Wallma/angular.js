require 'test_helper'

class EeCategoriesControllerTest < ActionController::TestCase
  setup do
    @ee_category = ee_categories(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:ee_categories)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create ee_category" do
    assert_difference('EeCategory.count') do
      post :create, ee_category: { ee_category_id: @ee_category.ee_category_id, name: @ee_category.name }
    end

    assert_redirected_to ee_category_path(assigns(:ee_category))
  end

  test "should show ee_category" do
    get :show, id: @ee_category
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @ee_category
    assert_response :success
  end

  test "should update ee_category" do
    patch :update, id: @ee_category, ee_category: { ee_category_id: @ee_category.ee_category_id, name: @ee_category.name }
    assert_redirected_to ee_category_path(assigns(:ee_category))
  end

  test "should destroy ee_category" do
    assert_difference('EeCategory.count', -1) do
      delete :destroy, id: @ee_category
    end

    assert_redirected_to ee_categories_path
  end
end
