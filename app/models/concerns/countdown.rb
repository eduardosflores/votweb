module Countdown
  extend ActiveSupport::Concern

  included do
    def duration
      super.try(:seconds) || super
    end

    def stop_countdown
      countdown = (DateTime.current.to_time - self.created_at).to_i

      if countdown > 0 && self.duration.to_i > countdown
        self.duration = countdown
        self.save(validate: false)
      end
    end

    def open?
      # 3 segundos de folga
      (self.created_at + self.duration + 3.seconds) >= DateTime.current
    end
  end
end