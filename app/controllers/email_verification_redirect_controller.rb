# frozen_string_literal: true

class EmailVerificationRedirectController < ApplicationController
   
  
    def index
      @body_classes = 'app-body'
    end
  
      
    ######################################################################################
    # @Auth: SoftWinner
    # @Date: 2021.6.18
    # @Desc: Admin UI Redirection
    ######################################################################################
    def emailVerificationRedirect
  
      @redirect_url = (ENV['FULL_REDIRECT_URL'] && ENV['FULL_REDIRECT_URL'] != '' ) ? ENV['FULL_REDIRECT_URL'] : 'http://sitelinez.com'
      redirect_to @redirect_url
    end
  
    
  
    
end
  
