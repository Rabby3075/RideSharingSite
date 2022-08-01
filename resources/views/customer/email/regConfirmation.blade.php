@component('mail::message')
    # {{ $details['title'] }}
    #{{ $details['code'] }}

    The body of your message.

    Thanks,<br>
    {{ config('app.name') }}
@endcomponent
