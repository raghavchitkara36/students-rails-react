require 'test_helper'

class MystudentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mystudent = mystudents(:one)
  end

  test "should get index" do
    get mystudents_url, as: :json
    assert_response :success
  end

  test "should create mystudent" do
    assert_difference('Mystudent.count') do
      post mystudents_url, params: { mystudent: { email: @mystudent.email, name: @mystudent.name, phone: @mystudent.phone, roll_number: @mystudent.roll_number } }, as: :json
    end

    assert_response 201
  end

  test "should show mystudent" do
    get mystudent_url(@mystudent), as: :json
    assert_response :success
  end

  test "should update mystudent" do
    patch mystudent_url(@mystudent), params: { mystudent: { email: @mystudent.email, name: @mystudent.name, phone: @mystudent.phone, roll_number: @mystudent.roll_number } }, as: :json
    assert_response 200
  end

  test "should destroy mystudent" do
    assert_difference('Mystudent.count', -1) do
      delete mystudent_url(@mystudent), as: :json
    end

    assert_response 204
  end
end
