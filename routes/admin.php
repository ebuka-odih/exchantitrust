


<?php


use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth', 'verified', 'admin'], 'prefix' => 'admin', 'as' => 'admin.'], function(){

    Route::get('dashboard', 'Admin\AdminController@dashboard')->name('dashboard');
    Route::get('users', 'Admin\AdminController@users')->name('users');
    Route::get('user/details/{id}', 'Admin\AdminController@userDetails')->name('userDetails');
    Route::delete('delete/user', 'Admin\AdminController@deleteUser')->name('deleteUser');

    Route::post('withdrawal/message', "Admin\UserController@userMessage")->name('userMessage');

    Route::get('users', "Admin\UserController@users")->name('users');
    Route::get('user/details/{id}', "Admin\UserController@viewUser")->name('viewUser');
    Route::get('user/withdrawal/method/{id}', "Admin\UserController@userWithdrawMethod")->name('userWithdrawMethod');
    Route::delete('delete/user/{id}', "Admin\UserController@deleteUser")->name('deleteUser');

    Route::get('deposits', "Admin\DepositsController@deposits")->name('deposit');
    Route::get('view/deposits', "Admin\DepositsController@view_deposit")->name('view_deposit');
    Route::get('approve/deposit/{id}', "Admin\DepositsController@approve_deposit")->name('approve_deposit');
    Route::delete('delete/deposit/{id}', "Admin\DepositsController@deleteDeposit")->name('deleteDeposit');

    Route::get('withdrawals', "Admin\WithdrawalController@withdrawal")->name('withdrawal');
    Route::get('withdraw/details/{id}', "Admin\WithdrawalController@details")->name('withdrawal.details');
    Route::get('approve/withdrawal/{id}', "Admin\WithdrawalController@approve_withdrawal")->name('approve_withdrawal');
    Route::delete('delete/withdrawal/{id}', "Admin\WithdrawalController@delete_withdrawal")->name('delete_withdrawal');

    Route::get('invest/stocks', "Admin\InvestStockController@stocks")->name('stocks');
    Route::delete('delete/stocks', "Admin\InvestStockController@delete_stock")->name('delete_stock');

    Route::resource('package', "Admin\PackageController");
    Route::resource('stocks', "Admin\StockController");
    Route::resource('crypto', "Admin\AdminCryptoController");
    Route::resource('payment-method', "Admin\PaymentMethodController");
    Route::resource('nftlisting', "Admin\AdminListNFTController");

    Route::get('fund/user', "Admin\AdminFundingController@fund")->name('fund');
    Route::post('fund/user', "Admin\AdminFundingController@sendFund")->name('sendFund');

//    Route::get('add-wallet', "Admin\UserController@wallet")->name('wallet');
//    Route::post('add-wallet', "Admin\UserController@storeWallet")->name('storeWallet');

    Route::get('security', "Admin\AdminController@security")->name('security');
    Route::post('security', "Admin\AdminController@storePassword")->name('storePassword');

    Route::resource('wallet', "Admin\AdminCryptoWallet");

    Route::get('trading/pair', "Admin\TradingPairController@index")->name('pairs');
    Route::get('stock/trading/pair', "Admin\TradingPairController@stockList")->name('stockList');
    Route::get('indexes/trading/pair', "Admin\TradingPairController@indexesList")->name('indexesList');
    Route::get('create/trading/pair', "Admin\TradingPairController@create")->name('create.pair');
    Route::post('store/crypto/pair', "Admin\TradingPairController@store")->name('store.pair');
    Route::post('store/stock/pair', "Admin\TradingPairController@storeStock")->name('storeStock');
    Route::post('store/indexes/pair', "Admin\TradingPairController@storeIndexes")->name('storeIndexes');


});


