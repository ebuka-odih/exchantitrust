@component('mail::message')

# Dear {{ $deposit->user['name'] }}

Your deposit sum of {{ $deposit->amount }} has been approved
<br>
Login your dashboard for more details.

Thanks,<br>
{{ config('app.name') }}
@endcomponent
