class Api::V1::BoardSavesController < ApiController
  before_action :authenticate_user

  def index
    # boards = current_user.boards
    # render json: { boards: boards }
    render json: BoardSave.all
  end

  def create
    # new_board_save = BoardSave.new({ position: params[:board_safe]})
    # new_board_save = BoardSave.new(params[:board_safe])
    # new_board_save = BoardSave.new(board_save_params)

    # data = JSON.parse(params[:board_safe])
    new_board_save = BoardSave.new(position: params[:board_safe], user_id: current_user.id)

    # take a look how to overwrite rails default convention model name, etc

    # binding.pry 

    # new_board_save.user_id = current_user
    if new_board_save.save 
      render json: new_board_save
    else
      render json: { error: new_board_save.errors.full_messages }
    end
  end

  private 

  def board_save_params
    params.require(:board_safe).permit(:position)

    # permit title once you add that functionality
  end

  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end

end